import { fireEvent, render, screen } from '@testing-library/react';
import { faker } from "@faker-js/faker"
import CompEdu from './CompEdu.jsx'
import '@testing-library/jest-dom'

describe("CompEdu", () => {
  it("should render correctly", () => {
    const title = faker.company.name()
    const data = faker.date.recent().getFullYear()
    const descriptionValue = faker.lorem.paragraph()
    const compEduMock = {
      title, data, description: {
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
      }
    }

    render(<CompEdu compEdu={compEduMock} />)

    expect(screen.getByText(title)).toBeInTheDocument()
    expect(screen.getByText(data)).toBeInTheDocument()
    expect(screen.getByText(descriptionValue)).toBeInTheDocument()
  })
})