using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace WebMotors.Models
{
	public class AnuncioWebmotors
	{
		public int ID { get; set; }
		[Required(ErrorMessage = "Marca obrigatória", AllowEmptyStrings = false)]
		public string Marca { get; set; }
		[Required(ErrorMessage = "Modelo obrigatório", AllowEmptyStrings = false)]
		public string Modelo { get; set; }
		[Required(ErrorMessage = "Versão obrigatória", AllowEmptyStrings = false)]
		public string Versao { get; set; }
		[Required(ErrorMessage = "Ano obrigatório", AllowEmptyStrings = false)]
		public int Ano { get; set; }
		[Required(ErrorMessage = "Quilometragem obrigatória", AllowEmptyStrings = false)]
		public int Quilometragem { get; set; }
		[Required(ErrorMessage = "Observação obrigatório", AllowEmptyStrings = false)]
		public string Observacao { get; set; }
	}
}