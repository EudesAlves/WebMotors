using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebMotors.Repositorio;
using WebMotors.Models;

namespace WebMotors.Controllers
{
    public class AnuncioController : Controller
    {
		private AnuncioRepositorio anuncioRepo = new AnuncioRepositorio();
		private List<AnuncioWebmotors> anuncios = new List<AnuncioWebmotors>();

		// GET: Anuncio
        public ActionResult Index()
        {
			anuncios = anuncioRepo.GetAnuncios();
			return View(anuncios);
        }

        // GET: Anuncio/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Anuncio/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Anuncio/Create
        [HttpPost]
        public ActionResult Create(AnuncioWebmotors anuncio)
        {
			if (ModelState.IsValid)
			{
				try
				{
					// TODO: Add insert logic here
					anuncioRepo.AddAnuncio(anuncio);


					return RedirectToAction("Index");
				}
				catch
				{
					return View();
				}
			}
			anuncio.Marca = String.Empty;
			anuncio.Modelo = String.Empty;
			anuncio.Versao = String.Empty;
			return View(anuncio);
		}

        // GET: Anuncio/Edit/5
        public ActionResult Edit(int id)
        {
			AnuncioWebmotors anuncio = new AnuncioWebmotors();
			anuncio = anuncioRepo.GetAnuncioById(id);
			return View(anuncio);
        }

        // POST: Anuncio/Edit/5
        [HttpPost]
        public ActionResult Edit(AnuncioWebmotors anuncio, FormCollection collection)
        {
			if (ModelState.IsValid)
			{
				try
				{
					// TODO: Add update logic here
					anuncioRepo.UpdateAnuncio(anuncio);
					return RedirectToAction("Index");
				}
				catch
				{
					return View();
				}
			}
			anuncio.Marca = String.Empty;
			anuncio.Modelo = String.Empty;
			anuncio.Versao = String.Empty;
			return View(anuncio);
        }

        // GET: Anuncio/Delete/5
        public ActionResult Delete(int id)
        {
			AnuncioWebmotors anuncio = new AnuncioWebmotors();
			anuncio = anuncioRepo.GetAnuncioById(id);
			return View(anuncio);
        }

        // POST: Anuncio/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
				// TODO: Add delete logic here
				anuncioRepo.DeleteAnuncio(id);
                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
