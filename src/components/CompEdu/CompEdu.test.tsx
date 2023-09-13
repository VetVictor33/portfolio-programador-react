import { faker } from "@faker-js/faker";
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Document, Root } from "datocms-structured-text-utils";
import CompEdu from './CompEdu.tsx';

describe("CompEdu", () => {
  it("should render correctly", () => {
    const id = faker.number.int()
    const title = faker.company.name()
    const data = String(faker.date.recent().getFullYear())
    const descriptionValue = faker.lorem.paragraph()
    const compEduMock = {
      id, title, data, description: {
        "value": {
          "schem": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "heading",
                "level": 1,
                "children": [
                  {
                    "type": "span",
                    "value": "Title"
                  }
                ]
              },
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": `${descriptionValue}`
                  }
                ]
              }
            ]
          } as unknown as Root
        } as unknown as Document
      }
    }

    render(<CompEdu compEdu={compEduMock} />)

    expect(screen.getByText(title)).toBeInTheDocument()
    expect(screen.getByText(data)).toBeInTheDocument()
    expect(screen.getByText(descriptionValue)).toBeInTheDocument()
  })
})