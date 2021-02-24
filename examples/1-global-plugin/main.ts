import * as Phaser from 'phaser';
import * as JsonAssetLoader from '../../src';

class Boot extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  public preload(): void {
    console.log((this.plugins.get('GlobalJsonAssetLoader') as JsonAssetLoader.GlobalJsonAssetLoader).hello());
  }
}

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.CANVAS,
  parent: 'gameDiv',
  width: 800,
  height: 600,
  scene: [Boot],
  plugins: {
    global: [{ key: 'GlobalJsonAssetLoader', plugin: JsonAssetLoader.GlobalJsonAssetLoader, start: true }],
  },
  banner: false,
  backgroundColor: 'ffffff',
};

const game = new Phaser.Game(config);
