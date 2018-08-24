import { SettingsRoutingModule } from './settings-routing.module';

describe('SettingsRoutingModule', () => {
  let settingsRoutingModule: SettingsRoutingModule;

  beforeEach(() => {
    settingsRoutingModule = new SettingsRoutingModule();
  });

  it('should create an instance', () => {
    expect(settingsRoutingModule).toBeTruthy();
  });
});
