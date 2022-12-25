import "./Register.css"; 

const Register = () => {
  const companyName = "Just Scan It";
  const handleForm = (event) => {
    alert('test');
  }
  return (
    <div>
    <form id="registerForm" >
      <li><i class="fa-solid fa-user"></i><input type="text" id="fname" name="fname" placeholder="John"/></li>
      <li><i class="fa-sharp fa-solid fa-envelope"></i><input type="text" id="email" name="email" placeholder="Email"/></li>
      <li><i class="fa-solid fa-user-tie"></i><input type="text" id="user" name="user" placeholder="User"/></li>
    </form>
    <div className="desert-ball"></div>
    </div>
  )
}

export default Register;
