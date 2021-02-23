import * as Phaser from 'phaser';

export default class JsonAssetLoader extends Phaser.Plugins.ScenePlugin {
  constructor(scene: Phaser.Scene, pluginManager: Phaser.Plugins.PluginManager) {
    super(scene, pluginManager);
  }

  public hello(): void {
    console.log('hello world!!');
  }
}
