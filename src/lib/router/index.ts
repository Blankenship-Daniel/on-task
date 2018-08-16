import { Events } from "./events";

export class Router {
  public static init() {
    window.addEventListener(Events.HASH_CHANGE, () => this.emitRouteChange());
  }

  private static emitRouteChange() {
    window.dispatchEvent(
      new CustomEvent(Events.ROUTE_CHANGE, {
        detail: `/${location.hash.substr(1)}`
      })
    );
  }
}

export const RouterEvents = Events;
