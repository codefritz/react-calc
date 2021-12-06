import { appendValue, calculate } from "./functions";

test("Append 2 values and sum", () => {
    expect(
        appendValue(
            appendValue("2", "+"), "2")
        ).toBe("2+2");
});

test("Append 2 values and sum", () => {
    expect(appendValue(2, 2)).toBe("22");
});


test("Calculate basic sum", () => {
    expect(calculate("2+2")).toBe(4);
})

test("Calculate incorrect (Okta) input should show err", () => {
    expect(calculate("2+02")).toBe("Err");
})