using OpenTK.Graphics.OpenGL;
using OpenTK.Windowing.Common;
using OpenTK.Windowing.Desktop;
using OpenTK.Windowing.GraphicsLibraryFramework;

namespace grafik;

public class MyWindow : GameWindow
{
    public MyWindow(NativeWindowSettings nativeWindowSettings) 
        : base(GameWindowSettings.Default, nativeWindowSettings)
    {
        VSync = VSyncMode.Adaptive;
    }

    private const int minX = -5;
    private const int maxX = 5;
    private const int minY = -5;
    private const int maxY = 5;
    
    private readonly Hyperbole hyperbole = new(-4, 4, 1);

    protected override void OnLoad()
    {
        base.OnLoad();
        
        GL.ClearColor(1.0f, 1.0f, 1.0f, 1.0f);
    }

    protected override void OnResize(ResizeEventArgs resizeEventArgs)
    {
        int w = resizeEventArgs.Width;
        int h = resizeEventArgs.Height;
        GL.MatrixMode(MatrixMode.Projection);
        GL.LoadIdentity();
        GL.Viewport(0, 0, w, h);
        GL.Ortho(minX, maxX, minY, maxY, 1, -1); 
        
        base.OnResize(resizeEventArgs);
    }

    protected override void OnUpdateFrame(FrameEventArgs args)
    {
        if (KeyboardState.IsKeyDown(Keys.Escape))
        {
            Close();
        }
        
        base.OnUpdateFrame(args);
    }

    protected override void OnRenderFrame(FrameEventArgs args)
    {
        GL.Clear(ClearBufferMask.ColorBufferBit);
        
        var graph = new Grafik(minX, maxX, minY, maxY);
        graph.DrawGraph();
        
        hyperbole.Draw();

        SwapBuffers();
        base.OnRenderFrame(args);
    }
    
    
}