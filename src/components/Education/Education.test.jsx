import { render, screen, waitFor } from '@testing-library/react';
import { faker } from "@faker-js/faker"
import '@testing-library/jest-dom'
import Education from './Education.jsx';

const mockQuery = jest.fn()

jest.mock('graphql-hooks', () => ({
  ...jest.requireActual('graphql-hooks'),
  useQuery: () => mockQuery()
}))

describe("Education", () => {
  it("should render correctly", () => {
    const id2 = faker.string.uuid()
    const title2 = faker.company.name()
    const data2 = 2022
    const descriptionValue2 = faker.lorem.paragraph()
    const compEduMock2 = {
      id: id2, title: title2, data: data2, description: {
        "type": "root",
        "children": [
          {
            "type": "paragraph",
            "children": [
              {
                "type": "span",
                "value": descriptionValue2
              }
            ]
          }
        ]
      }
    }
    const id = faker.string.uuid()
    const title = faker.company.name()
    const data = 2023
    const descriptionValue = faker.lorem.paragraph()
    const compEduMock = {
      id, title, data, description: {
        "type": "root",
        "children": [
          {
            "type": "paragraph",
            "children": [
              {
                "type": "span",
                "value": descriptionValue
              }
            ]
          }
        ]
      }
    }
    const mockData = {
      allComplementaryEducations: [
        compEduMock,
        compEduMock2
      ],
    };
    mockQuery.mockReturnValue({ data: mockData })

    render(<Education />)

    expect(mockQuery).toHaveBeenCalled()
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(data)).toBeInTheDocument();
    expect(screen.getByText(descriptionValue)).toBeInTheDocument();
    expect(screen.getByText(title2)).toBeInTheDocument();
    expect(screen.getByText(data2)).toBeInTheDocument();
    expect(screen.getByText(descriptionValue2)).toBeInTheDocument();

  })
})