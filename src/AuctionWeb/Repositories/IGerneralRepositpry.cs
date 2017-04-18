using System;
using System.Linq;

namespace ActionApp.Repositories
{
    public interface IGerneralRepositpry : IDisposable
    {
        void Delete<T>(T record) where T : class;
        IQueryable<T> List<T>() where T : class;
        T Save<T>(T record) where T : class;
        void SaveChanges();
        void Update<T>(T record) where T : class;
    }
}