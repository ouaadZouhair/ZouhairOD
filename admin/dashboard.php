<?php 

session_start();

if(!isset($_SESSION['id'])){
    header('location: ../loginSYS/login.php');
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" integrity="sha512-5Hs3dF2AEPkpNAR7UiOHba+lRSJNeM2ECkwxUIxC1Q/FLycGTbNapWXB4tP889k5T5Ju8fs4b1P5z/iB4nMfSQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="icon" type="image/x-icon" href="./assets/logo/logo.png">
    <!-- <link rel="stylesheet" href="../src/style.css"> -->
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Admin panel</title>
</head>

<body class="bg-slate-900">
    <header class="header" id="dm">
        <nav class=" flex justify-around items-center py-5 bg-gray-200 w-full" id="dm">
            <div class="logo">
                <a href="#">
                    <h3 class='text-3xl font-semibold text-black'>Zouhair<span class="text-blue-600">OD.</span></h3>
                </a>
            </div>
            <ul class="flex flex-row gap-10 font-bold text-xl text-gray-600 ">
                <li class="hover:text-blue-600"><a id="dm" href="#home">Home</a></li>
                <li class="hover:text-blue-600"><a href="../loginSYS/logout.php" id="dm">Logout</a></li>

            </ul>

            <div class="nav-btns">
                <button class="flex justify-center items-center text-xl border-2 rounded-full w-10 h-10 border-black bg-white p-1.5 hover:text-white hover:bg-black hover:border-white" id="btn-troggle-laptop"><i class="fa-solid fa-moon"></i></button>
            </div>
            <!-- 
            <div class="menu-nav-bar" id="dm">
                <i class="fa-solid fa-bars"></i>
            </div> -->
        </nav>
        <!-- <div class="overlay"></div>
        <nav class="nav-bar-mobile" id="dm">
            <div href="#" class="close-icon">
                <i class="fa-regular fa-circle-xmark" id="dm"></i>
            </div>
            <div class="logo">
                <a href="#">
                    <h3 id="dm">Zouhair<span>OD.</span></h3>
                </a>
            </div>
            <ul class="nav-links" id="nav-mobile-links">
                <li class="nav-link"><a class="active" id="dm" href="#home">Home</a></li>
                <li class="nav-link"><a href="#about" id="dm">About</a></li>
                <li class="nav-link"><a href="#projects" id="dm">Projects</a></li>
                <li class="nav-link"><a href="#contact" id="dm">Contact</a></li>
            </ul>

            <div class="nav-btns">
                <a href="#contact" class="btn-contact" id="dm"><i class="fa-regular fa-comment"></i></a>
                <button class="btn-troggle-dm" id="btn-troggle-mobile"><i class="fa-solid fa-moon"></i></button>
            </div>
        </nav> -->
    </header>

    <section class="container mx-auto grid grid-cols-2 grid-rows-2 gap-4 justify-center justify-items-center items-center content center w-screnn h-full p-5 m-10 ">
        <div class="w-full h-auto bg-gray-200 p-3 rounded-xl">
            <h3 class='text-gray-800 font-semibold text-3xl text-center'>Projects forms</h3>

            <form action="project_form.php" method="post" enctype="multipart/form-data">
                <div>
                    <label for="projectName" class="block text-lg font-medium text-gray-700">Project name</label>
                    <input type="text" class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" name="projectName" id="projectName" required>
                </div>
                <div>
                    <label for="techName" class="block text-lg font-medium text-gray-700">Technologies</label>
                    <input type="text" class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" name="techName" id="techName" required>
                </div>
                <div>
                    <label for="LienAPI" class="block text-lg font-medium text-gray-700">API Lien</label>
                    <input type="text" class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" name="lienAPI" id="LienAPI">
                </div>
                <div>
                    <label for="website" class="block text-lg font-medium text-gray-700">Website Lien</label>
                    <input type="url" class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" name="websiteURL" id="website">
                </div>
                <div class="flex items-center justify-center mt-3 flex-row">
                    <div>
                        <!-- Custom File Input -->
                        <label
                            for="file-upload"
                            class="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-600 transition inline-flex items-center">
                            <i class="fa-solid fa-download text-white text-lg mr-2"></i>
                            Image Project
                        </label>
                        <input id="file-upload" type="file" class="hidden" name="image" />
                    </div>
                    <button type="submit" name="save" class="border-2 rounded-xl bg-green-600 text-white shadow font-semibold text-lg ml-3 px-5 py-2 hover:bg-green-700 hover:text-white">Save</button>
                </div>


            </form>
        </div>

        <div class="w-full h-auto bg-gray-200 p-3 rounded-xl">
            <h3 class='text-gray-800 font-semibold text-3xl text-center'>Technologies forms</h3>
            <form action="project_form.php" method="post">
                <div>
                    <label for="TechName" class="block text-lg font-medium text-gray-700">Tech name</label>
                    <input type="text" class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" name="TechName" id="TechName">
                </div>
                <div>
                    <label for="porcentage" class="block text-lg font-medium text-gray-700">Porcentage</label>
                    <input type="text" class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" name="porcentage" id="porcentage">
                </div>
               
               
                <div class="flex items-center justify-center mt-3 flex-row">
                    <div>
                        <!-- Custom File Input -->
                        <label
                            for="file-upload"
                            class="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-600 transition inline-flex items-center">
                            <i class="fa-solid fa-download text-white text-lg mr-2"></i>
                            Image Tech
                        </label>
                        <input id="file-upload" type="file" class="hidden" />
                    </div>
                    <button type="submit" class="border-2 rounded-xl bg-green-600 text-white shadow font-semibold text-lg ml-3 px-5 py-2 hover:bg-green-700 hover:text-white">Save</button>
                </div>


            </form>
        </div>

        <div class="w-full h-auto bg-gray-200 p-3 rounded-xl">
            <h3 class='text-gray-800 font-semibold text-3xl text-center'>Education & Experience form</h3>
            <form action="project_form.php" method="post">
                <div>
                    <label for="type" class="block text-lg font-medium text-gray-700">Type</label>
                    <select name="type" id="type" class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option value="#" selected></option>
                        <option value="Education">Education</option>
                        <option value="Experience">Experience</option>
                    </select>
                </div>
                <div>
                    <label for="year" class="block text-lg font-medium text-gray-700">Year</label>
                    <input type="text" class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" name="year" id="year">
                </div>
                <div>
                    <label for="description" class="block text-lg font-medium text-gray-700">Description</label>
                    <input type="text" class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" name="description" id="description">
                </div>
               
                <div class="flex items-center justify-center mt-3 flex-row">
                   
                    <button type="submit" class="border-2 rounded-xl bg-green-600 text-white shadow font-semibold text-lg ml-3 px-5 py-2 hover:bg-green-700 hover:text-white">Save</button>
                </div>


            </form>
        </div>

        <div class="w-full h-auto bg-gray-200 py-3 rounded-xl shadow-md">
            <h3 class='text-gray-800 font-semibold text-3xl text-center'>Content List</h3>
            <div class="overflow-hidden w-full max-w-4xl pt-2">
                <table class="w-full bg-gray-300 border border-gray-900 rounded-lg">
                  <thead>
                    <tr class="bg-gray-600 text-gray-100 border-0">
                      <th class="px-4 py-2 border w-4 border-x-gray-600">Id</th>
                      <th class="px-4 py-2 border border-x-gray-600">Name</th>
                      <th class="px-4 py-2 border border-x-gray-600">Form title</th>
                      <th class="px-2 py-2 border border-x-gray-600 w-15">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="px-4 py-2 border text-center">1</td>
                      <td class="px-4 py-2 border">Row 1, Col 2</td>
                      <td class="px-4 py-2 border">Row 1, Col 3</td>
                      <td class="px-2 py-2 border text-2xl text-center"><i class="fa-solid fa-trash-can hover:text-red-600 mr-5"></i> <i class="fa-solid fa-pen hover:text-green-600"></i></td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="px-4 py-2 border text-center">2</td>
                      <td class="px-4 py-2 border ">Row 2, Col 2</td>
                      <td class="px-4 py-2 border ">Row 2, Col 3</td>
                      <td class="px-4 py-2 border text-2xl text-center"><i class="fa-solid fa-trash-can hover:text-red-600 mr-5"></i> <i class="fa-solid fa-pen hover:text-green-600"></i></td>
                    </tr>
                    <tr>
                      <td class="px-4 py-2 border text-center">3</td>
                      <td class="px-4 py-2 border ">Row 3, Col 2</td>
                      <td class="px-4 py-2 border ">Row 3, Col 3</td>
                      <td class="px-4 py-2 border text-2xl text-center"><i class="fa-solid fa-trash-can hover:text-red-600 mr-5"></i> <i class="fa-solid fa-pen hover:text-green-600"></i></td>
                    </tr>
                  </tbody>
                </table>
              </div>
        </div>

        <div class="w-full h-auto bg-gray-200 py-3 rounded-xl shadow-md col-span-2">
            <h3 class='text-gray-800 font-semibold text-3xl text-center'>Contact Message</h3>
            <div class="overflow-hidden w-full pt-2">
                <table class="w-full bg-gray-300 border border-gray-900 rounded-lg">
                  <thead>
                    <tr class="bg-gray-600 text-gray-100 border-0">
                      <th class="px-4 py-2 border w-4 border-x-gray-600">Id</th>
                      <th class="px-4 py-2 border W-20 border-x-gray-600">Full Name</th>
                      <th class="px-4 py-2 border border-x-gray-600">Message</th>
                      <th class="px-4 py-2 border border-x-gray-600">Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="px-4 py-2 border text-center">1</td>
                      <td class="px-4 py-2 border W-20">Row 1, Col 2</td>
                      <td class="px-4 py-2 border">Row 1, Col 3</td>
                      <td class="px-4 py-2 border">Row 1, Col 4</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="px-4 py-2 border text-center">2</td>
                      <td class="px-4 py-2 border W-20">Row 2, Col 2</td>
                      <td class="px-4 py-2 border">Row 2, Col 3</td>
                      <td class="px-4 py-2 border">Row 2, Col 4</td>
                    </tr>
                    <tr>
                      <td class="px-4 py-2 border text-center">3</td>
                      <td class="px-4 py-2 border W-20">Row 3, Col 2</td>
                      <td class="px-4 py-2 border">Row 3, Col 3</td>
                      <td class="px-4 py-2 border">Row 3, Col 4</td>
                    </tr>
                  </tbody>
                </table>
              </div>
        </div>


    </section>
</body>

</html>