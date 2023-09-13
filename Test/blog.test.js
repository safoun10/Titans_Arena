import { render, screen, cleanup } from "@testing-library/react";
import Blogs from "../src/Pages/Blogs/Blogs";

test("Get all the data", () => {
  render(<Blogs />);
  const blogElement = screen.getAllByTestId("blog-test-1")
  expect(blogElement.length).toBeGreaterThan(0)
});
