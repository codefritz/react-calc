import { appendValue, calculate } from "./functions";

test("Append 2 values value", () => {
    expect(
        appendValue(
            appendValue("2", "+"), "2")
        ).toBe("2+2");
});

test("Calculate basic sum", () => {
    expect(calculate("2+2")).toBe(4);
})

test("Calculate incorrect (Okta) input should show err", () => {
    expect(calculate("2+02")).toBe("Err");
})