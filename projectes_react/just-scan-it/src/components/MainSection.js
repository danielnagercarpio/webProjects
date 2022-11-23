import './MainSection.css';
const MainSection = () => {
  const title = "Join JustScanIt improve your income as a seller and save time ";
  const paragraphContent = "We provide tools to automate the purchase, customers will only have to scan their own purchase and pay automatically from their mobile by themselves";

  return (
    <section id="mainsection">
      <h1>{title}</h1>
      <p>{paragraphContent}</p>
      <label for="companyEmail">
	 <button id="email" name="email">Company name</button>
      </label>
      <label for="companyEmailAdress">
	 <button id="address" name="address">Email Address</button>
      </label>
    </section>
  )
}

export default MainSection;
