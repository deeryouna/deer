const url = "data/board.json";
const frame = $(".community .inner");

const resultData = callData(url);
createTable(frame, resultData);

function callData(url){   
    let result;

    $.ajax({
        url : url,
        dataType : "json",
        async : false 
    })
    .success((data)=>{
        result = data.board;    
    })
    .error((err)=>{
        console.error(err);
    });
  
    return result;
}

function createTable(target, data){
    //table프레임과 thead 완성
    target.append(
        $("<table>")
            .attr("summary", "자유게시판의 글번호, 제목, 작성자")
            .append(
                $("<caption class='hidden'>").text("자유게시판"),
                $("<thead>")
                    .append(
                        $("<tr>")
                            .append(
                                '<th scope="col">No</th>',
                                '<th scope="col">Title</th>',
                                '<th scope="col">Writer</th>',
                                '<th scope="col">Date</th>'
                            )
                    ),
                "<tbody>"
            )
    );

    for(let i=0; i<data.length; i++){
        target.find("tbody")
            .prepend(
                $("<tr>")
                    .append(
                        $("<td>").text(i+1),
                        $("<td>")                        
                            .append(
                                $("<a>").attr("href","#").text(data[i].title)
                            ),
                        $("<td>").text(data[i].writer),
                        $("<td>").text(data[i].date)                        
                    )
            )
    }
}
