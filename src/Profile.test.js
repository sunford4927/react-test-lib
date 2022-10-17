import React from "react";
import { render } from "@testing-library/react";
import Profile from "./Profile";

describe("<Profile />", () => {
    it("matches snapshot", () => {
        const utils =render(<Profile username="lsh1012" name="이상현" />);
        expect(utils.container).toMatchSnapshot();
    });
    it("shows the props correctly", () => {
        const utils = render(<Profile username="lsh1012" name="이상현" />);
        utils.getByText("lsh1012");
        utils.getByText("(이상현)");
        // utils.getByText("lsh1012(이상현)");
    });
});