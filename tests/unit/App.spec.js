import { shallowMount } from "@vue/test-utils";
import App from "../../src/App.vue";

describe("App.vue", () => {
  it("is an istancia of Vue", () => {
    const wrapper = shallowMount(App, {
      stubs: ['router-view']
    })
    expect(wrapper).toBeTruthy();
  });
});