using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Product
    {
        public int Id { get; set; } // if we use any other naming convesion here instead of Id then the Entity will not reconise a primary key field it will probably going to give an error  

        public string Name { get; set; }

        public string Description { get; set; }

        public long Price { get; set; } // choosed long instead of decimal 1. String use the long, 2. SQLLite does not support the decimal  

        public string PictureUrl { get; set; }

        public string Type { get; set; }
        
        public string Brand { get; set; }

        public int QuantityInStock { get; set; }

    }
}