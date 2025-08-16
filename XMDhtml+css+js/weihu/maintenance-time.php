<?php
// 设置响应为JSON格式
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// 维护结束时间（格式：年-月-日 时:分:秒）
// 请修改为实际的维护结束时间
$endTime = "2025-08-16 18:00:00";

// 输出时间给前端
echo json_encode([
    "endTime" => $endTime
]);
?>