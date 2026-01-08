class NintendoGame {
  #gameList = [
    { id: 1, name: "커비", genre: "액션", grade: "15세", price: 59000 },
    { id: 2, name: "마리오 카트", genre: "레이싱", grade: "전체", price: 69000 },
  ];

  printList() {
    $(".frame-2").empty(); // 기존 내용 초기화
    this.#gameList.forEach((item) => {
      $(".frame-2").append(this.printRow(item));
    });
  }

  printRow(item) {
    return `
    <div class="frame game-row" data-id="${item.id}">
      <div class="data-group">
        <div class="rectangle"></div>
        <div class="text-wrapper">${item.name}</div>
        <div class="div"></div>
      </div>

      <div class="group-2">
        <div class="rectangle-2"></div>
        <div class="text-wrapper-2">${item.genre}</div>
        <div class="rectangle-3"></div>
      </div>

      <div class="group-3">
        <div class="rectangle-2"></div>
        <div class="text-wrapper-2">${item.grade}</div>
        <div class="rectangle-3"></div>
      </div>

      <div class="group-4">
        <div class="rectangle-2"></div>
        <div class="text-wrapper-2">${item.price.toLocaleString()}원</div>
        <div class="rectangle-3"></div>
      </div>
    </div>
    `;
  }
}

$(() => {
  const nint = new NintendoGame();
  nint.printList();
});
