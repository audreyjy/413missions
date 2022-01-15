using System;
using System.ComponentModel.DataAnnotations;

namespace Mission2.Models
{
    public class CalculatorModel
    {
        [Required]
        [Range(0, 100)]
        public int Assignments { get; set; }

        [Required]
        [Range(0, 100)]
        public int Group { get; set; }

        [Required]
        [Range(0, 100)]
        public int Quizzes { get; set; }

        [Required]
        [Range(0, 100)]
        public int Exams { get; set; }

        [Required]
        [Range(0, 100)]
        public int INTEX { get; set; }
        

    }
}


