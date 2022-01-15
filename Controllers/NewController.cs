﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Mission2.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Mission2.Controllers
{
    public class NewController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        // this is get method
        [HttpGet]
        public IActionResult Calculator()
        {
            return View();
        }

        // this is post method
        [HttpPost]
        public IActionResult Calculator(CalculatorModel model)
        {
            return View(); 
        }

    }
}
