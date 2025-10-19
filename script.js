
    let count = 0;
    const counter = document.getElementById("counter");
    const btn = document.getElementById("incrementBtn");

    btn.addEventListener("click", function() {
      alert("Current (un-incremented) value: " + count);
      count++;
      counter.textContent = count;
    });
