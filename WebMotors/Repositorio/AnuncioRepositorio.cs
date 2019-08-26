using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using Dapper;
using System.Configuration;
using WebMotors.Models;

namespace WebMotors.Repositorio
{
	public class AnuncioRepositorio
	{
		private IDbConnection db = new SqlConnection();
		private List<AnuncioWebmotors> anuncios = new List<AnuncioWebmotors>();

		public AnuncioRepositorio()
		{
			db.ConnectionString = ConfigurationManager.ConnectionStrings["teste_webmotors"].ConnectionString;
		}

		public List<AnuncioWebmotors> GetAnuncios()
		{
			var query = "Select * from tb_AnuncioWebmotors";
			anuncios = db.Query<AnuncioWebmotors>(query).ToList();
			return anuncios;
		}

		public AnuncioWebmotors GetAnuncioById(int id)
		{
			AnuncioWebmotors anuncio = new AnuncioWebmotors();
			var query = "Select * from tb_AnuncioWebmotors Where Id = @Id";
			anuncio = db.Query<AnuncioWebmotors>(query, new { @id = id }).FirstOrDefault();
			return anuncio;
		}

		public void AddAnuncio(AnuncioWebmotors anuncio)
		{
			var query = "Insert into tb_AnuncioWebmotors (Marca,Modelo,Versao,Ano,Quilometragem,Observacao) values (@Marca,@Modelo,@Versao,@Ano,@Quilometragem,@Observacao)";
			int rowsAffected = db.Execute(query, anuncio);
		}

		public void UpdateAnuncio(AnuncioWebmotors anuncio)
		{
			var query = "Update tb_AnuncioWebmotors set Marca = @Marca,Modelo = @Modelo,Versao = @Versao,Ano = @Ano,Quilometragem = @Quilometragem,Observacao = @Observacao Where Id = @Id";
			int rowsAffected = db.Execute(query, anuncio);
		}

		public void DeleteAnuncio(int id)
		{
			var query = "Delete from tb_AnuncioWebmotors Where Id = @Id";
			int rowsAffected = db.Execute(query, new { @id = id });
		}

	}
}