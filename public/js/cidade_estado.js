
	$(document).ready(function () {
		
		$.getJSON('js/estados_cidades.json', function (data) {
			var items = [];
			var options = '<option value="">Selecione um estado</option>';	
			$.each(data, function (key, val) {
				options += '<option value="' + val.nome + '">' + val.nome + '</option>';
			});					
			$("#estados").html(options);				

			$("#estados").change(function () {				
				
				var options_cidades = '<option value="">Selecione uma cidade</option>';
				var str = "";					

				$("#estados option:selected").each(function () {
					str += $(this).text();
				});

				$.each(data, function (key, val) {
					if(val.nome == str) {							
						$.each(val.cidades, function (key_city, val_city) {
							options_cidades += '<option value="' + val_city + '">' + val_city + '</option>';
						});							
					}
				});
				$("#cidades").html(options_cidades);

			}).change();		
			
		});
		
	});