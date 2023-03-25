export default function CompEdu(data) {
    const { title, date, description } = data.props
    return (
        <article>
            <p className="course-name">{title}</p>
            <p className="course-date">{date}</p>
            <p className="text-description course-description">{description}</p>
        </article>
    )
}