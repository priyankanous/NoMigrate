using Microsoft.EntityFrameworkCore;
using QuoteMaster.API.Models;

namespace QuoteMaster.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options) {}
        public DbSet<Value> Values { get; set; }
    }
}