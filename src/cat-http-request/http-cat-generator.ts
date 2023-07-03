export const HttpStatusMessages: Record<
  number,
  { titulo: string; descricao: string }
> = {
  100: {
    titulo: "Continue",
    descricao: "O servidor recebeu a solicitação e ainda está processando-a.",
  },
  101: {
    titulo: "Switching Protocols",
    descricao:
      "O servidor concorda em trocar o protocolo solicitado pelo cliente.",
  },
  102: {
    titulo: "Processing",
    descricao:
      "O servidor está processando a solicitação, mas ainda não concluiu.",
  },
  103: {
    titulo: "Early Hints",
    descricao:
      "O servidor está enviando dicas adicionais antes de enviar a resposta final.",
  },
  200: {
    titulo: "OK",
    descricao: "A solicitação foi bem-sucedida.",
  },
  201: {
    titulo: "Criado",
    descricao:
      "A solicitação foi bem-sucedida e resultou na criação de um novo recurso.",
  },
  202: {
    titulo: "Aceito",
    descricao:
      "A solicitação foi aceita para processamento, mas ainda não foi concluída.",
  },
  203: {
    titulo: "Informações não autorizadas",
    descricao:
      "A resposta foi retornada com sucesso, mas pode ser de uma fonte não autorizada.",
  },
  204: {
    titulo: "Sem conteúdo",
    descricao:
      "A solicitação foi bem-sucedida, mas a resposta não possui conteúdo para retornar.",
  },
  205: {
    titulo: "Redefinir conteúdo",
    descricao:
      "A solicitação foi bem-sucedida, mas o cliente deve redefinir a exibição do conteúdo solicitado.",
  },
  206: {
    titulo: "Conteúdo parcial",
    descricao: "A resposta contém apenas uma parte do recurso solicitado.",
  },
  207: {
    titulo: "Multi Status",
    descricao:
      "A resposta contém vários códigos de status, um para cada parte da operação.",
  },
  208: {
    titulo: "Já reportado",
    descricao:
      "A solicitação foi bem-sucedida e o resultado foi aplicado anteriormente.",
  },
  226: {
    titulo: "Eu sou usado",
    descricao:
      "O servidor concluiu a solicitação para o recurso, e a resposta é uma representação do resultado final de um ou mais manipuladores de instância.",
  },
  300: {
    titulo: "Múltiplas escolhas",
    descricao: "A solicitação tem mais de uma resposta possível.",
  },
  301: {
    titulo: "Movido permanentemente",
    descricao:
      "A página solicitada foi movida permanentemente para um novo local.",
  },
  302: {
    titulo: "Encontrado",
    descricao:
      "A página solicitada foi encontrada, mas está temporariamente localizada em um novo local.",
  },
  303: {
    titulo: "Veja outras",
    descricao:
      "A resposta à solicitação pode ser encontrada em um diferente URI usando o método GET.",
  },
  304: {
    titulo: "Não modificado",
    descricao:
      "A página solicitada não foi modificada desde a última solicitação.",
  },
  305: {
    titulo: "Use Proxy",
    descricao:
      "A solicitação deve ser acessada através do proxy fornecido no local especificado.",
  },
  306: {
    titulo: "Proxy Switch",
    descricao:
      "Esse código de status não é mais usado, mas foi deixado aqui por razões históricas.",
  },
  307: {
    titulo: "Redirecionamento temporário",
    descricao:
      "A página solicitada está temporariamente localizada em um novo local.",
  },
  308: {
    titulo: "Redirecionamento permanente",
    descricao:
      "A página solicitada foi permanentemente movida para um novo local.",
  },
  400: {
    titulo: "Requisição inválida",
    descricao: "A solicitação não pôde ser entendida ou foi mal formada.",
  },
  401: {
    titulo: "Não autorizado",
    descricao: "O cliente deve autenticar-se para obter a resposta solicitada.",
  },
  402: {
    titulo: "Pagamento necessário",
    descricao:
      "Reservado para uso futuro. A intenção é que esse código seja usado quando o recurso estiver disponível apenas mediante pagamento.",
  },
  403: {
    titulo: "Proibido",
    descricao: "O servidor entende a solicitação, mas se recusa a autorizá-la.",
  },
  404: {
    titulo: "Não encontrado",
    descricao: "A página solicitada não pôde ser encontrada no servidor.",
  },
  405: {
    titulo: "Método não permitido",
    descricao:
      "O método de solicitação usado não é suportado para a página solicitada.",
  },
  406: {
    titulo: "Não aceitável",
    descricao:
      "O servidor não pode gerar uma resposta que seja aceitável de acordo com os cabeçalhos de solicitação aceitos pelo cliente.",
  },
  407: {
    titulo: "Autenticação de proxy necessária",
    descricao:
      "O cliente deve se autenticar com o proxy antes de obter a resposta solicitada.",
  },
  408: {
    titulo: "Tempo limite da solicitação",
    descricao:
      "O servidor encerrou a conexão porque o cliente demorou muito para concluir a solicitação.",
  },
  409: {
    titulo: "Conflito",
    descricao:
      "A solicitação não pôde ser concluída devido a um conflito com o estado atual do recurso.",
  },
  410: {
    titulo: "Desaparecido",
    descricao:
      "O recurso solicitado não está mais disponível no servidor e não deixou nenhum redirecionamento para um novo local.",
  },
  411: {
    titulo: "Comprimento necessário",
    descricao:
      "A solicitação não foi concluída porque o cliente não forneceu o tamanho do conteúdo solicitado.",
  },
  412: {
    titulo: "Pré-condição falhou",
    descricao:
      "A solicitação não foi concluída porque uma das condições prévias especificadas pelo cliente foi avaliada como falsa pelo servidor.",
  },
  413: {
    titulo: "Carga útil muito grande",
    descricao:
      "A solicitação não foi concluída porque o servidor se recusou a processar a carga útil da solicitação devido a ser muito grande.",
  },
  414: {
    titulo: "URI muito longo",
    descricao:
      "A solicitação não foi concluída porque o URI solicitado é muito longo para o servidor processar.",
  },
  415: {
    titulo: "Tip de mídia não suportado",
    descricao:
      "A solicitação não foi concluída porque o formato de mídia da solicitação não é suportado pelo servidor.",
  },
  416: {
    titulo: "Faixa não satisfatória",
    descricao:
      "A solicitação não foi concluída porque a parte solicitada da resposta não está dentro do intervalo definido pelo servidor.",
  },
  417: {
    titulo: "Falha na expectativa",
    descricao:
      "A solicitação não foi concluída porque o servidor não é capaz de atender a uma ou mais expectativas indicadas no cabeçalho da solicitação.",
  },
  418: {
    titulo: "Eu sou um bule de chá",
    descricao:
      "Essa resposta de status foi definida como uma brincadeira e não deve ser levada a sério.",
  },
  421: {
    titulo: "Requisição direcionada incorretamente",
    descricao:
      "A solicitação foi direcionada a um servidor que não é capaz de produzir uma resposta.",
  },
  422: {
    titulo: "Entidade não processável",
    descricao:
      "A solicitação está bem formada, mas não pôde ser processada devido a erros semânticos.",
  },
  423: {
    titulo: "Fechado",
    descricao:
      "O recurso solicitado está bloqueado e atualmente não está disponível.",
  },
  424: {
    titulo: "Falha de dependência",
    descricao:
      "A solicitação falhou devido a uma falha de uma solicitação anterior.",
  },
  425: {
    titulo: "Muito cedo",
    descricao:
      "O servidor se recusa a iniciar a solicitação antes de um determinado período de tempo ter decorrido desde sua reinicialização.",
  },
  426: {
    titulo: "Upgrade necessário",
    descricao:
      "O servidor se recusa a executar a solicitação usando o protocolo atualmente aplicado ao recurso solicitado.",
  },
  428: {
    titulo: "Pré-condição necessária",
    descricao: "A solicitação deve ser condicional para acessar o recurso.",
  },
  429: {
    titulo: "Muitas solicitações",
    descricao:
      "O usuário enviou muitas solicitações em um determinado período de tempo.",
  },
  431: {
    titulo: "Campos de cabeçalho da solicitação muito grandes",
    descricao:
      "O servidor não pode processar a solicitação porque os campos de cabeçalho são muito grandes.",
  },
  451: {
    titulo: "Indisponível por motivos legais",
    descricao:
      "O recurso solicitado não está disponível devido a restrições legais.",
  },
  500: {
    titulo: "Erro interno do servidor",
    descricao:
      "O servidor encontrou uma situação inesperada que o impediu de concluir a solicitação.",
  },
  501: {
    titulo: "Não implementado",
    descricao:
      "O servidor não suporta a funcionalidade necessária para atender à solicitação.",
  },
  502: {
    titulo: "Bad Gateway",
    descricao:
      "O servidor atuando como gateway ou proxy recebeu uma resposta inválida do servidor upstream.",
  },
  503: {
    titulo: "Serviço indisponível",
    descricao:
      "O servidor não está pronto para lidar com a solicitação no momento devido a uma sobrecarga temporária ou manutenção do servidor.",
  },
  504: {
    titulo: "Tempo limite do gateway",
    descricao:
      "O servidor atuando como gateway ou proxy não recebeu uma resposta oportuna do servidor upstream.",
  },
  505: {
    titulo: "Versão HTTP não suportada",
    descricao:
      "A versão do protocolo HTTP usado na solicitação não é suportada pelo servidor.",
  },
  506: {
    titulo: "Variantes também negociam",
    descricao:
      "O servidor encontrou uma circunstância inesperada que impediu a conclusão da solicitação.",
  },
  507: {
    titulo: "Armazenamento insuficiente",
    descricao:
      "O servidor não pode armazenar a representação necessária para completar a solicitação.",
  },
  508: {
    titulo: "Loop detectado",
    descricao:
      "O servidor detectou um loop infinito ao processar a solicitação.",
  },
  510: {
    titulo: "Não estendido",
    descricao: "O servidor requer mais extensões para atender à solicitação.",
  },
  511: {
    titulo: "Autenticação de rede necessária",
    descricao: "O cliente deve autenticar-se para obter acesso à rede.",
  },
};
