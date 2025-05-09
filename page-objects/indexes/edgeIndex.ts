import { Page } from "@playwright/test";

import { EdgeHomePage } from "../edge/edgeHomePage";

export class EdgePageObjectManager {
    public edgeHomePage!: EdgeHomePage;

    init(page: Page) {
        this.edgeHomePage = new EdgeHomePage(page);
    }
}