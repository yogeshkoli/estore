using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    [Table("BasketItems")] // data anotations to specify the table name
    public class BasketItem
    {
        public int Id { get; set; }

        public int Quantity { get; set; }

        // navigation properities
        public int ProductId { get; set; }

        public Product Product { get; set; }

        public int BasketId { get; set; }
        public Basket Basket { get; set; }
    }
}