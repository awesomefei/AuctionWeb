using AuctionWeb.Data;
using System.Linq;

namespace ActionApp.Repositories
{
    public class GerneralRepositpry: IGerneralRepositpry
    {
        private ApplicationDbContext db;

        public GerneralRepositpry(ApplicationDbContext db)
        {
            this.db = db;
        }

        public IQueryable<T> List<T>() where T : class
        {
            return db.Set<T>().AsQueryable();
        }

        public void Delete<T>(T record) where T : class
        {
            db.Set<T>().Update(record);

            SaveChanges();
        }

        public void Dispose()
        {
            db.Dispose();
        }

        public T Save<T>(T record) where T : class
        {
            db.Set<T>().Add(record);
            db.SaveChanges();
            return record;
        }

        public void Update<T>(T record) where T : class
        {
            db.Set<T>().Update(record);
            SaveChanges();
        }

        public void SaveChanges()
        {
            db.SaveChanges();
        }
    }
}
