import * as Phaser from 'phaser';

export default class GlobalJsonAssetLoader extends Phaser.Plugins.BasePlugin {
  constructor(pluginManager: Phaser.Plugins.PluginManager) {
    super(pluginManager);
  }

  public init(): void {
    console.log('Plugin is alive');
  }

  public hello(): void {
    console.log('hello world!!');
  }
}
