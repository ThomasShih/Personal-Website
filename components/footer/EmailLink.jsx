import HoverEffect from "../utilities/hoverEffect"

const Icon = window.styled.i`
  color: var(--nav-text-color);
`;

const EmailLink = () => (
  <HoverEffect hoverID="footerEmailLink">
    <a href="mailto:thomasshih@cmail.carleton.ca" download>
      <h2><Icon className="fa fa-envelope fa-lg"> Email Me</Icon></h2>
    </a>
  </HoverEffect>
)

export default EmailLink