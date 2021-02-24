import * as Phaser from 'phaser';
import * as JsonAssetLoader from '../../src';

class Boot extends Phaser.Scene {
  jsonAssetLoader!: JsonAssetLoader.JSONLoader;

  constructor() {
    super('Boot');
  }

  public preload(): void {
    this.jsonAssetLoader.hello();
  }
}

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.CANVAS,
  parent: 'gameDiv',
  width: 800,
  height: 600,
  scene: [Boot],
  plugins: {
    scene: [{ key: 'jsonAssetLoaderPlugin', plugin: JsonAssetLoader.JSONLoader, mapping: 'jsonAssetLoader' }],
  },
  banner: false,
  backgroundColor: 'ffffff',
};

const game = new Phaser.Game(config);
