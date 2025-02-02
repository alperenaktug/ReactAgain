import { Link, Outlet } from "react-router";

function About() {
  return (
    <div>
      <h1>About</h1>
      <hr />
      <hr />
      <Link className="link" to={"employee"}>
        Çalışanlar Hakkında
      </Link>
      <br />
      <Link className="link" to={"company"}>
        Şirket Hakkında
      </Link>

      <Outlet />
    </div>
  );
}

export default About;
