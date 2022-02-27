var products = [
  {
    id: "100",
    name: "iPhone 4S",
    brand: "Apple",
    os: "iOS",
  },
  {
    id: "101",
    name: "Moto X",
    brand: "Motorola",
    os: "Android",
  },
  {
    id: "102",
    name: "iPhone 6",
    brand: "Apple",
    os: "iOS",
  },
  {
    id: "103",
    name: "Samsung Galaxy S",
    brand: "Samsung",
    os: "Android",
  },
  {
    id: "104",
    name: "Google Nexus",
    brand: "ASUS",
    os: "Android",
  },
  {
    id: "105",
    name: "Surface",
    brand: "Microsoft",
    os: "Windows",
  },
];

$(document).ready(function () {
  display(products);
  var brand_arr = [];
  for (i of products) {
    brand_arr.push(i.brand);
  }
  var brand_set = new Set(brand_arr);
  console.log(brand_set);
  var brand_arr = Array.from(brand_set);
  var brand =
    '<select name = "brand" id = "brand"><option value = "none">none</option>';
  for (i of brand_arr) {
    brand += "<option value = " + i + " >" + i + "</option>";
  }
  brand += "</select>";
  //  $('#html').html(brand);
  $("#select").append(brand);
  $("#brand").css("margin", "20px");

  var os_arr = [];
  for (i of products) {
    os_arr.push(i.os);
  }
  var set = new Set(os_arr);
  var unique_os = Array.from(set);
  console.log(unique_os);
  var os = '<select name = "os" id = "os"><option value = "none">none</option>';
  for (i of unique_os) {
    os += "<option value = " + i + ">" + i + "</option>";
  }
  os += "</select>";
  //  $('#html').html(os);
  $("#select").append(os);

  $("body").on("click", "#remove", function () {
    var pid = $(this).data("id");
    $("#" + pid).hide();
    // return del(pid)
  });

  // var os_obj = [];
  // var brand_obj = [];
  // var brand_val = "none";
  // var os_val = "none";
  $("#select").on("change", "#os", function () {
    // var os_obj = [];
    // var brand_obj = [];
    var os_val = $(this).val();

    // for (i of products) {
    //   if (i.os == os_value) {
    //     os_obj.push(i);
    //   }
    // }
    // console.log(os_obj);
    // return os_obj ;
     display_selected(os_val, brand_val);
    //  display(arr);
   
  });
  $("#select").on("change", "#brand", function () {
    // var brand_obj = [];
    // var os_obj = [];

    var brand_val = $(this).val();
    // $('#tab').css('display', 'none')
    // console.log(brand_value);

    // for (i of products) {
    //   if (i.brand == brand_value) {
    //     brand_obj.push(i);
        //  display(os_obj);
    //   }
    // }
    //  console.log(final);
    //  return brand_obj ;
    display_selected(os_val, brand_val);
    // display(arr);
 
    //  display(products);
  });
  // if()
});
function display(products) {
  var html =
    '<table id = "tab"><tr><th> ID </th><th> name </th><th> brand </th><th> os </th><th> remove </th></tr>';
  for (i of products) {
    html +=
      "<tr id = " +
      i.id +
      " ><td>" +
      i.id +
      "</td><td>" +
      i.name +
      "</td><td>" +
      i.brand +
      "</td><td>" +
      i.os +
      '</td><td><a href = "#" id = "remove" data-id = ' +
      i.id +
      "> remove </a></td></tr>";
  }
  html += "</table>";
  $("#table").html(html);
  $("tr").css("border", "2px solid black");
  $("th").css("border", "2px solid red");
  $("td").css("border", "2px solid black");
  return 
  // products.splice(0,products.length);
}
function display_selected(os, brand) {
  var arr = [];
  var os_obj = [];
  var brand_obj = [];
  if (brand == "none") {
    for (i of products) {
      if (i.os == os) {
        os_obj.push(i);
      }
    }
    display(os_obj)
  } else if (os == "none") {
    for (i of products) {
      if (i.brand == brand) {
        brand_obj.push(i);
      }
    }
    display(brand_obj);
  } 
  else {
    for (i of products) {
        if (i.os == os && i.brand == brand) {
          arr.push(j);
        }
      }
      display(arr);
    }
  }
 

