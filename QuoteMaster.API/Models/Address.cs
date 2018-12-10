namespace QuoteMaster.API.Models
{
    public class Address
    {
        public int ID { get; set; }
        public string Residence { get; set; }
        public string Office { get; set; }
        public User User {get; set;}
        public int UserId { get; set; }
    }
}