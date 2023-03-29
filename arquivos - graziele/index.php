<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arquivos</title>
</head>
<body>

<?php 
    $arquivo = fopen("files/in.txt", "r");
    $out = fopen("files/out.txt", "w");

    if(!$arquivo) {
        die("Erro ao abrir arquivo.");
    }

    $numeroAlunos = 0;
    $numeroProfessores = 0;

    while(!feof($arquivo)) {
        $linha = fgets($arquivo);
        $dados = explode(";", $linha);

        $codigo = $dados[0];

        if($codigo == "001") {
            // Aluno
            $numeroAlunos += 1;
        } else if ($codigo == "002") {
            // Professor
            $numeroProfessores += 1;

            $materia = $dados[1];
            $nome = trim($dados[2]);

            fwrite($out, "Professor: " . $nome . " | Matéria: " . $materia . "\n");

        } else {
            echo "Código [" . $codigo . "] é inválido.";
        }

    }

    fclose($arquivo);
    fclose($out);

    echo "Número de alunos: " . $numeroAlunos . "<br>";
    echo "Número de professores: " . $numeroProfessores . "<br>";
?>


</body>
</html>