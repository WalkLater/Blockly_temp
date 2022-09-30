var maze = new Array();
var start = true;
maze[0] = new Array(0,2,0,0);
maze[1] = new Array(1,1,0,0);
maze[2] = new Array(1,1,0,0);
maze[3] = new Array(0,1,0,0);
maze[4] = new Array(0,1,1,0);
maze[5] = new Array(0,0,1,0);
var location_x = 0;
var location_y = 1;
var check_start = function(flag)
{
    if (flag)
    {

    }
    else
    {
        alert("请设置开关");
        throw new Error(result.error_code);
    }
}
var move = function(way, step)
{
      switch (way) {
      case "左":
        for (i=1; i<=step; i++)
        {
            if (maze[location_x][location_y - i] == 1)
                continue;
            else
                break;

        }
        if (i > step)
            location_y = location_y - step;
        else
        {
           alert("wrong step");
           throw new Error(result.error_code);
        }
      break;

      case "右":
        for (i=1; i<=step; i++)
        {
            if (maze[location_x][location_y + i] == 1)
                continue;
            else
                break;
        }
        if (i > step)
            location_y = location_y + step;
        else
        {
             alert("wrong step");
             throw new Error(result.error_code);
        }
      break;

      case "上":
        for (i=1; i<=step; i++)
        {
            if (maze[location_x - i][location_y] == 1)
                continue;
            else
                break;
        }
        if (i > step)
            location_x = location_x + step;
        else
        {
             alert("wrong step");
             throw new Error(result.error_code);
        }
      break;

      case "下":
        for (i=1; i<=step; i++)
        {
            if (maze[location_x + i][location_y] == 1)
                continue;
            else
                break;
        }
        if (i > step)
            location_x = location_x + step;
        else
        {
             alert("wrong step");
             throw new Error(result.error_code);
        }
      break;
    }
}
