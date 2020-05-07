import HoverEffect from "../utilities/hoverEffect"
const resumeSrc = "../../assets/resume.pdf"

const Icon = window.styled.i`
  color: var(--nav-text-color);
`;

const ResumeDownload = () => (
  <HoverEffect hoverID="footerResumeLink">
    <a href={resumeSrc} download>
      <h2><Icon className="fa fa-download fa-lg"> Download Resume</Icon></h2>
    </a>
  </HoverEffect>
)

export default ResumeDownload