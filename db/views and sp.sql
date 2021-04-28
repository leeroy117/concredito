create view vGetOneProspect 
as
select 
id_prospecto, nombre, primer_apellido, segundo_apellido, calle, numero, colonia, cp, tel, rfc, observaciones,
status_id_status 
as status 
from prospectos;

CREATE VIEW vgetprospectos 
AS
SELECT 
	p.id_prospecto, p.nombre, p.primer_apellido, p.segundo_apellido, s.status
FROM prospectos as p
INNER JOIN status as s
WHERE s.id_status = p.status_id_status;

delimiter //
CREATE  PROCEDURE SP_CreateProspect(
in _nombre varchar(45),
in _primer_apellido varchar(45),
in _seundo_apellido varchar(45),
in _calle nvarchar(45),
in _numero nvarchar(6),
in _colonia nvarchar(45),
in _cp varchar(10),
in _tel varchar(10),
in _rfc varchar(13)
)
begin
	insert into prospectos (nombre, primer_apellido, 
    segundo_apellido, calle, numero, colonia, cp, tel, rfc)
    values (_nombre, _primer_apellido, _seundo_apellido, _calle, _numero, _colonia, _cp,
    _tel, _rfc);
end //

delimiter //
CREATE  PROCEDURE SP_UpdateProspect(
in _observaciones nvarchar(200),
in _status int,
in _id_prospecto int 
)
begin
	update prospectos 
    set observaciones = _observaciones, status_id_status = _status
    where id_prospecto = _id_prospecto;
end //
