using OpenTK.Graphics.OpenGL;

namespace grafik;

public class Grafik
{
    public Grafik(int minX, int maxX, int minY, int maxY)
    {
        _minX = minX;
        _maxX = maxX;
        _minY = minY;
        _maxY = maxY;
    }

    private readonly int _minX;
    private readonly int _maxX;
    private readonly int _minY;
    private readonly int _maxY;

    private const int Center = 0;

    private void DrawAxis()
    {
        GL.Vertex2(_minX, Center);
        GL.Vertex2(_maxX, Center);
        
        GL.Vertex2(Center, _minY);
        GL.Vertex2(Center, _maxY);
    }

    private void DrawArrowAxis()
    {
        double xEndArrow = _maxX - 0.1;
        double yEndArrow = _maxY - 0.1;
        
        GL.Vertex2(xEndArrow, Center + 0.1);
        GL.Vertex2(_maxX, Center);
        
        GL.Vertex2(xEndArrow, Center - 0.1);
        GL.Vertex2(_maxX, Center);
        
        GL.Vertex2(Center + 0.1, yEndArrow);
        GL.Vertex2(Center, _maxY);
        
        GL.Vertex2(Center - 0.1, yEndArrow);
        GL.Vertex2(Center, _maxY);
    }
    
    private void DrawDivisionsAxis()
    {
        const double step = 0.5;
        const double sizeDivision = 0.1;

        for (double i = _minX; i < _maxX; i += step)
        {
            double x = i + step;
            GL.Vertex2(x, sizeDivision / 2);
            GL.Vertex2(x, -sizeDivision / 2);
        }
        
        for (double i = _minY; i < _maxY; i += step)
        {
            double y = i + step;
            GL.Vertex2(sizeDivision / 2, y);
            GL.Vertex2(-sizeDivision / 2, y);
        }
    }
    
    public void DrawGraph()
    {
        GL.Color3(0.0, 0.0, 0.0);
        
        GL.Begin(PrimitiveType.Lines);

        DrawAxis();
        DrawArrowAxis();
        DrawDivisionsAxis();
        
        GL.End();
    }
}