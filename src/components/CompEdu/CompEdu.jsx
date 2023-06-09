import { StructuredText } from "react-datocms/structured-text";
import './CompEdu.css'

export default function CompEdu({ compEdu }) {
    const { title, data, description } = compEdu;
    return (
        <article className="CompEdu">
            <p className="course-name">{title}</p>
            <p className="course-date">{data}</p>
            <StructuredText
                data={description} />
        </article>
    )
}