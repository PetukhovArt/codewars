program Hello;
    VAR
    x:array [1..32767] of integer;
    n,m,i: integer;
begin

for i:=1 to 32767 do begin
    x[i]:=i;
end;

readln (m);
for n:=1 to 32767 do begin
if m=x[n]*(x[n]+1)/2 then
writeln ('Число является квадратным')
else
writeln ('Число НЕ является квадратным')
end;
end.