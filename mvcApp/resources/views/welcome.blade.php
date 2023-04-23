<html lang="en">

<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  @vite(['resources/css/welcome.css','resources/js/app.js','resources/js/slideform.js'])
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>
  <!-- Navbar-->
  <nav class="navbar">
    <img class="navbar-brand w-25" href="#"></img>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
  <div class="container mt-5">
    <div class="row d-flex justify-content-center align-items-center">
      <div class="col-md-8">
        <form id="regForm">
          <h1 id="register">Bar Cadi</h1>
          <div class="all-steps" id="all-steps">
            <span class="step"><i class="fa fa-utensils"></i></span>
            <span class="step"><i class="fa-solid fa-1"></i></span>
            <span class="step"><i class="fa-solid fa-2"></i></span>
            <span class="step"><i class="fa-solid fa-3"></i></span>
            <span class="step"><i class="fa-solid fa-4"></i></span>
            <span class="step"><i class="fa fa-mobile-phone"></i></span>
          </div>

          <div class="tab">
            <h6>What's your table number?</h6>
            <p>
              <input placeholder="Table..." oninput="this.className = ''" name="fname">
            </p>

          </div>
          <div class="tab">
            <h6>What's your Starter?</h6>
            <div class="select-starter">
              <div class="select-btn">
                <span class="sBtn-text"> Select your option </span>
              </div>
              <ul class="options">
                <li class="option">
                  <span class="option-text">Bruschetta</span>
                </li>
                <li class="option">
                  <span class="option-text">Spring rolls</span>
                </li>
                <li class="option">
                  <span class="option-text">Caprese salad</span>
                </li>
                <li class="option">
                  <span class="option-text">Hummus and pita</span>
                </li>
                <li class="option">
                  <span class="option-text">Caesar salad</span>
                </li>
              </ul>
            </div>
            <select id="starters" name="starters">
              <option value="bruschetta">Bruschetta</option>
              <option value="spring-rolls">Spring rolls</option>
              <option value="caprese-salad">Caprese salad</option>
              <option value="hummus-pita">Hummus and pita</option>
              <option value="caesar-salad">Caesar salad</option>
            </select>
          </div>
          <div class="tab">
            <h6>What's your Favourite Shopping site?</h6>
            <p><input placeholder="Favourite Shopping site" oninput="this.className = ''" name="email"></p>

          </div>
          <div class="tab">
            <h6>What's your Favourite car?</h6>
            <p><input placeholder="Favourite car" oninput="this.className = ''" name="uname"></p>
          </div>

          <div class="tab">
            <h6>What's your Favourite Song?</h6>
            <p><input placeholder="Favourite Song" oninput="this.className = ''" name="uname"></p>
          </div>


          <div class="tab">
            <h6>What's your Favourite Mobile brand?</h6>
            <p><input placeholder="Favourite Mobile Brand" oninput="this.className = ''" name="uname"></p>
          </div>
          <div class="thanks-message text-center" id="text-message"> <img src="https://i.imgur.com/O18mJ1K.png"
              width="100" class="mb-4">
            <h3>Thankyou for your feedback!</h3> <span>Thanks for your valuable information. It helps us to improve our
              services!</span>
          </div>
          <div style="overflow:auto;" id="nextprevious">
            <div style="float:right;">
              <button type="button" id="prevBtn"><i class="fa fa-angle-double-left"></i></button>
              <button type="button" id="nextBtn"><i class="fa fa-angle-double-right"></i></button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Navbar -->

  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
    integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
    integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
    integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
    crossorigin="anonymous"></script>

</body>

</html>