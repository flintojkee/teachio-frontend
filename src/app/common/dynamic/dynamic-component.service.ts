import {
  Injector,
  ComponentRef,
  ComponentFactory,
  Compiler,
  Injectable,
  NgModuleFactory,
} from '@angular/core';
import { DynamicModule } from './dynamic-module.class';
@Injectable({
  providedIn: 'root',
})
export class DynamicComponentService {
  constructor(private injector: Injector) {}

  async getComponentBySelector(
    componentSelector: string,
    moduleLoaderFunction: () => Promise<any>
  ): Promise<ComponentRef<unknown>> {
    const moduleFactory = await this.getModuleFactory(moduleLoaderFunction);
    const module = moduleFactory.create(this.injector);
    if (module.instance instanceof DynamicModule) {
      const compFactory: ComponentFactory<any> = module.instance.getComponentFactory(
        componentSelector
      );
      return compFactory.create(module.injector, [], null, module);
    } else {
      throw new Error(
        'Module should extend BaseModule to use "string" based component selector'
      );
    }
  }

  async getModuleFactory(
    moduleLoaderFunction: () => Promise<NgModuleFactory<any>>
  ) {
    const ngModuleOrNgModuleFactory = await moduleLoaderFunction();
    let moduleFactory;
    if (ngModuleOrNgModuleFactory instanceof NgModuleFactory) {
      // AOT
      moduleFactory = ngModuleOrNgModuleFactory;
    } else {
      // JIT
      moduleFactory = await this.injector
        .get(Compiler)
        .compileModuleAsync(ngModuleOrNgModuleFactory);
    }
    return moduleFactory;
  }
}
