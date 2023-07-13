import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import InputDiary from "./components/InputDiary";
import Notes from "./components/Notes";
import { showFormattedDate } from "./utils";

test("input page test", async () => {
  render(<InputDiary />);
  await screen.findByRole("input-form");

  expect(screen.getByRole("input-form")).toBeInTheDocument();
  expect(screen.getByText("Buat Catatan")).not.toBeDisabled();
});

test("notes list render", async () => {
  const notes = [
    {
      id: 1,
      title: "Belajar testing",
      body: "Belajar react testing Serius !!!",
      createdAt: showFormattedDate(new Date()),
      archived: false,
    },
  ];
  render(<Notes notes={notes} />);

  await screen.findAllByRole("list");

  expect(screen.getAllByRole("list"));
  expect(screen.getByText("Belajar testing")).toBeInTheDocument();
  expect(
    screen.getByText("Belajar react testing Serius !!!")
  ).toBeInTheDocument();
});
