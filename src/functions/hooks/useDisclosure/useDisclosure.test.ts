import { renderHook, act } from "@testing-library/react";
import { useDisclosure } from "./useDisclosure";

test("should increment counter", () => {
  const { result } = renderHook(() => useDisclosure());

  act(() => {
    result.current.open();
  });

  expect(result.current.isOpen).toBe(true);
});
