import { StructuredText } from "react-datocms/structured-text";
import './CompEdu.sass'
import { ComplementaryEducation } from "../../@types/types";

type Props = {
    compEdu: ComplementaryEducation
}

export default function CompEdu({ compEdu }: Props) {
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