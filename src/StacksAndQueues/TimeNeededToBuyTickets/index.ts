interface Entry {
  index: number;
  tickets: number;
} 

function timeRequiredToBuy(tickets: number[], k: number): number {
  let time = 0;
  let queue: Entry[] = [];

  for(let i = 0; i < tickets.length; i++) {
      queue.push({
          index: i,
          tickets: tickets[i],
      })
  }

  while(queue.length > 0){
      const current = queue.shift();
      if(current) {
        current.tickets--;
      }

      time++; 

      if(current && current.tickets > 0) {
          queue.push(current);
      } else if(current?.index === k && current.tickets === 0) {
          return time;
      }
  }

  return time;
};

//complexidade de tempo: O(n)
//complexidade de espaço: O(n)

/*
  N pessoas na fila pra comprar ingressos
  0 - primeiro
  (length - 1) - ultimo
  array de tickets tem o tamanho de N
  o numero de tickets que a pessoa [i] vai comprar, está em array[i]
  a pessoa pode comprar 1 ticket por vez e ir para o fim da fila instantaneamente, se a pessoa comprou tudo, sairá da fila
  retornar o tempo da pessoa na posicao k
  parar quando o numero de tickets de K for 0
*/